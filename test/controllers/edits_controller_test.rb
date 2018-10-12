require 'test_helper'

class EditsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @edit = edits(:one)
  end

  test "should get index" do
    get edits_url
    assert_response :success
  end

  test "should get new" do
    get new_edit_url
    assert_response :success
  end

  test "should create edit" do
    assert_difference('Edit.count') do
      post edits_url, params: { edit: { department: @edit.department, email: @edit.email, facebook: @edit.facebook, github: @edit.github, image: @edit.image, phonetic: @edit.phonetic, subject: @edit.subject, twitter: @edit.twitter, user_name: @edit.user_name } }
    end

    assert_redirected_to edit_url(Edit.last)
  end

  test "should show edit" do
    get edit_url(@edit)
    assert_response :success
  end

  test "should get edit" do
    get edit_edit_url(@edit)
    assert_response :success
  end

  test "should update edit" do
    patch edit_url(@edit), params: { edit: { department: @edit.department, email: @edit.email, facebook: @edit.facebook, github: @edit.github, image: @edit.image, phonetic: @edit.phonetic, subject: @edit.subject, twitter: @edit.twitter, user_name: @edit.user_name } }
    assert_redirected_to edit_url(@edit)
  end

  test "should destroy edit" do
    assert_difference('Edit.count', -1) do
      delete edit_url(@edit)
    end

    assert_redirected_to edits_url
  end
end
