class MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
    @messages = Message.all.order(id: "DESC")
  end


  def create
    @messages = Message.new(message_params)
    if @messages.valid?
      @messages.save
      redirect_to group_messages
    else
      render :index
    end
  end
  




  private

  def message_params
    params.require(:message).permit(:content)
  end





end
