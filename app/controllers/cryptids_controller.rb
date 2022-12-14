class CryptidsController < ApplicationController

    def index
        render json: Cryptid.all
    end
end
