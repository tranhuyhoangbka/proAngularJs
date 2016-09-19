class Action < ActiveRecord::Base
  enum done: {"No": 0, "Yes": 1}
end
