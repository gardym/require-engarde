# vi: set ft=ruby :
require 'sinatra'

get '/' do
  send_file 'fight.html'
end

run Sinatra::Application
