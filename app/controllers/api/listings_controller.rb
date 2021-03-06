class Api::ListingsController < ApplicationController
  def show
    @listing = Listing.find(params[:id])
    @reviews = @listing.reviews.order(created_at: :desc).pluck(:id)


    if logged_in?
      @current_user_bookings = current_user.bookings
        .where('listing_id = ?', @listing.id)
        .where('check_in > ?', Date.today)

      @current_user_save = current_user.saves
        .where('listing_id = ?', @listing.id)[0]
    else
      @current_user_bookings = {}
      @current_user_save = {}
    end
  end

  def index
    @listings = Listing.all
      .includes(:reviews)
      .includes(:bookings)
      .includes(:listing_photos)
  end

  def home_index
    npsHost = User.find_by_username('nps');
    @listings = Listing.where('host_id = ?', npsHost.id)
    render 'api/listings/home_index.json.jbuilder'
  end

  private
  def listing_params
    params.require(:listing).permit(:host_id, :title, :body,
    :daily_cost, :is_private, :is_camping, :allows_pets, :max_capacity,
    :check_in_after, :check_out_before, :lat, :lng, :icon_url)
  end

end
