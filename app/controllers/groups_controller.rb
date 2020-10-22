class GroupsController < ApplicationController
  before_action :authenticate_user!, only: [:select, :video, :index, :new]

  def select
  end

  def video
  end


  def index
    
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(new_group_params)
    if @group.save
      redirect_to groups_path
    else 
      render :new
    end
  end

  def show
  end
  
  def edit
  end

  def destroy
  end

  private

  def new_group_params
    params.require(:group).permit(:name, user_ids: [])
  end






end
