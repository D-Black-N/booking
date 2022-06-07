# coding UTF-8
class ApartmentsController < ApplicationController
  # GET /apartments
  def index
    apartments = Apartment.includes(:apartment_descriptions).all
    render json: apartments
  end

  # GET /apartments/new
  def new
  end

  # GET /apartments/:id
  def show
    apartment = Apartment.find_by(id: params[:id])
    render json: { apartment: apartment, description: apartment.apartment_description }
  end

  # POST /apartments
  def create
    apartment = Apartment.new(apartment_params)
    if apartment.save
      description = apartment.apartment_description.new(apartment_description_params)
      render json: apartment, status: :created if description.save
      render json: description.errors, status: :unprocessable_entity if description.errors.any?
    else
      render json: apartment.errors, status: :unprocessable_entity if apartment.errors.any?
    end
  end

  # GET /apartments/:id/edit
  def edit
    apartment = Apartment.find_by(id: params[:id])
    render json: apartment if apartment
    render json: 
  end

  # POST /apartments/:id
  def update
    apartment = Apartment.find_by(id: params[:id])
    render json: apartment, status: :ok if apartment.update(apartment_params)
    render json: apartment.errors, status: :unprocessable_entity if apartment.errors.any?
  end

  # DELETE /apartments/:id
  def destroy
    apartment = Apartment.find_by(id: params[:id])
    if apartment
      apartment.destroy
      render status: :no_content
    else
      render json: "Apartment not found", status: :unprocessable_entity
    end
  end

  private

  def apartment_params
    params.require(:apartment).permit(:name, :max_person, :rooms_number, :beach, :animals, :childs, :price)
  end

  def apartment_description_params
    params.require(:apartment_description).permit(:welcome, :rooms, :amenities, :check_in_out, :transfer, :location, :attractions, 
      :baltic, :airport, :how_to_get, :instagram
    )
  end
end
