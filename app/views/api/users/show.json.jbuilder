json.partial! "api/users/user", user: @user

json.extract! @user, :id, :username, :email

json.stories @user.stories do |story|
    json.extract! story, :id, :title, :body
end

json.followers @user.followers.each do |follower|
    json.extract! follower, :id, :username
end

json.followings @user.followings.each do |follower|
    json.extract! follower, :id, :username
end