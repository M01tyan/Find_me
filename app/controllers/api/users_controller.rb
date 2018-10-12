class Api::UsersController < ApplicationController
  def index
    @users = [
      { name: '前田 幹太', u_name: '会津大学', d_name: 'コンピュータ理工学部'}
    ]
  end
end
