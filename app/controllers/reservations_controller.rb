class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_reservation_not_found_error
rescue_from ActiveRecord::RecordInvalid, with: :render_reservation_invalid_error

    def index
        reservations = Reservation.all
        render json: reservations
    end

    def show
        reservation = find_reservation
        render json: reservation
    end

    def create
        new_reservation = Reservation.create!(reservation_params)
        render json: new_reservation, status: :created
    end

    def update
        reservation = find_reservation
        reservation.update!(reservation_params)
        render json: reservation, status: :accepted
    end

    def destroy
        reservation = find_reservation
        reservation.destroy
        render json: {}
    end

    private

    def find_reservation
        Reservation.find(params[:id])
    end

    def reservation_params
        params.permit(:date, :time, :user_id, :approved)
    end

    def render_reservation_not_found_error
        render json: { error: 'Reservation not found' }, status: :not_found
    end

    def render_reservation_invalid_error(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
