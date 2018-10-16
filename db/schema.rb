# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_16_145333) do

  create_table "api_bases", force: :cascade do |t|
    t.string "name"
    t.string "furigana"
    t.string "university"
    t.string "department"
    t.string "subject"
    t.integer "graduate_yaer"
    t.string "email"
    t.string "tel"
    t.string "github"
    t.string "facebook"
    t.string "twitter"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "api_v1_bases", force: :cascade do |t|
    t.string "name"
    t.string "furigana"
    t.string "university"
    t.string "department"
    t.string "subject"
    t.integer "graduate_yaer"
    t.string "email"
    t.string "tel"
    t.string "github"
    t.string "facebook"
    t.string "twitter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "bases", force: :cascade do |t|
    t.string "name"
    t.string "furigana"
    t.string "university"
    t.string "department"
    t.string "subject"
    t.integer "graduate_year"
    t.string "email"
    t.string "tel"
    t.string "github"
    t.string "facebook"
    t.string "twitter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "edits", force: :cascade do |t|
    t.string "user_name"
    t.string "phonetic"
    t.string "department"
    t.string "subject"
    t.string "email"
    t.string "image"
    t.string "facebook"
    t.string "github"
    t.string "twitter"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "messages", force: :cascade do |t|
    t.string "user"
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tests", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tops", force: :cascade do |t|
    t.string "name"
    t.string "u_name"
    t.string "d_name"
    t.integer "class_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gender"
    t.string "birthday"
    t.string "graduate"
    t.string "birthplace"
    t.string "highschool"
    t.string "licenses"
    t.string "hobby"
  end

end
