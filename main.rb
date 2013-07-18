require "sinatra"
require "sinatra/reloader"

get "/" do
  @scope = "week"
  erb :index
end

get "/today" do
  @scope = "today"
  erb :index
end

get "/week" do
  @scope = "week"
  erb :index
end

get "/beverages.json" do
  '{"data": [
    {"day": "Friday",    "coffee": 3, "water": 2, "soda": 1, "beer": 2 },
    {"day": "Saturday",  "coffee": 1, "water": 3, "soda": 1, "beer": 0 },
    {"day": "Sunday",    "coffee": 2, "water": 1, "soda": 0, "beer": 4 },
    {"day": "Monday",    "coffee": 4, "water": 4, "soda": 0, "beer": 0 },
    {"day": "Tuesday",   "coffee": 3, "water": 2, "soda": 3, "beer": 0 },
    {"day": "Wednesday", "coffee": 3, "water": 3, "soda": 0, "beer": 0 },
    {"day": "Thursday",  "coffee": 1, "water": 2, "soda": 0, "beer": 1 }
  ]}'
end
