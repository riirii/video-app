class GroupsController < ApplicationController
  before_action :authenticate_user!, only: [:select, :video, :index, :new]

  def select
  end

  def video
  end


  def index
    @messages = Message.all
  end

  def new
    @group = Group.new
  end

  def create
  end

  def show
  end
  
  def edit
  end

  def destroy
  end








end
