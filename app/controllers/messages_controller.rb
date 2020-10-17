class MessagesController < ApplicationController

  def index
    @message = Message.all.order(id: "DESC")
  end

  











end
