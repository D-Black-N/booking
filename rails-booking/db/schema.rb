# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_07_072626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "login"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "apartment_contacts", force: :cascade do |t|
    t.bigint "contact_id", null: false
    t.bigint "apartment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["apartment_id"], name: "index_apartment_contacts_on_apartment_id"
    t.index ["contact_id"], name: "index_apartment_contacts_on_contact_id"
  end

  create_table "apartment_descriptions", force: :cascade do |t|
    t.text "welcome"
    t.text "rooms"
    t.text "amenities"
    t.text "check_in_out"
    t.text "transfer"
    t.text "location"
    t.text "attractions"
    t.text "baltic"
    t.string "airport"
    t.text "how_to_get"
    t.string "instagram"
    t.bigint "apartment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["apartment_id"], name: "index_apartment_descriptions_on_apartment_id"
  end

  create_table "apartments", force: :cascade do |t|
    t.string "name"
    t.integer "max_person"
    t.integer "rooms_number"
    t.boolean "beach"
    t.boolean "animals"
    t.boolean "childs"
    t.integer "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "contacts", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.boolean "whats_app"
    t.boolean "telegram"
    t.boolean "viber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reserves", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "phone"
    t.date "check_in"
    t.date "check_out"
    t.integer "status"
    t.bigint "apartment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["apartment_id"], name: "index_reserves_on_apartment_id"
  end

  create_table "sales", force: :cascade do |t|
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "apartment_contacts", "apartments"
  add_foreign_key "apartment_contacts", "contacts"
  add_foreign_key "apartment_descriptions", "apartments"
  add_foreign_key "reserves", "apartments"
end
