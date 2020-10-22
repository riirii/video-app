class MessagesController < ApplicationController

  def index
    @group = Group.find(params[:group_id])
    @message = Message.new
  end


  def create
    @group = Group.find(params[:group_id]) 
    @message = Message.new(message_params)
    if @message.valid?
      @message.save
      redirect_to action: :index
    else
      # puts flash.now[:notice] = "文字を入力してください"
      render :index
    end
  end
  
  # def checked
  #   post = Post.find(params[:id])
  #   if post.checked 
  #     post.update(checked: false)
  #   else
  #     post.update(checked: true)
  #   end

  #   item = Post.find(params[:id])
  #   render json: { post: item }
  # end



  private

  def message_params
    params.require(:message).permit(:content).merge(user_id: current_user.id, group_id: params[:group_id])
  end





end
