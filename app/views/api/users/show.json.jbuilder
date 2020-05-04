json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :email
json.stories @user.stories