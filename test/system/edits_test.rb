require "application_system_test_case"

class EditsTest < ApplicationSystemTestCase
  setup do
    @edit = edits(:one)
  end

  test "visiting the index" do
    visit edits_url
    assert_selector "h1", text: "Edits"
  end

  test "creating a Edit" do
    visit edits_url
    click_on "New Edit"

    fill_in "Department", with: @edit.department
    fill_in "Email", with: @edit.email
    fill_in "Facebook", with: @edit.facebook
    fill_in "Github", with: @edit.github
    fill_in "Image", with: @edit.image
    fill_in "Phonetic", with: @edit.phonetic
    fill_in "Subject", with: @edit.subject
    fill_in "Twitter", with: @edit.twitter
    fill_in "User Name", with: @edit.user_name
    click_on "Create Edit"

    assert_text "Edit was successfully created"
    click_on "Back"
  end

  test "updating a Edit" do
    visit edits_url
    click_on "Edit", match: :first

    fill_in "Department", with: @edit.department
    fill_in "Email", with: @edit.email
    fill_in "Facebook", with: @edit.facebook
    fill_in "Github", with: @edit.github
    fill_in "Image", with: @edit.image
    fill_in "Phonetic", with: @edit.phonetic
    fill_in "Subject", with: @edit.subject
    fill_in "Twitter", with: @edit.twitter
    fill_in "User Name", with: @edit.user_name
    click_on "Update Edit"

    assert_text "Edit was successfully updated"
    click_on "Back"
  end

  test "destroying a Edit" do
    visit edits_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Edit was successfully destroyed"
  end
end
