# vi: set ft=ruby :
require 'sinatra'

get '/' do
  send_file 'index.html'
end

run Sinatra::Application
