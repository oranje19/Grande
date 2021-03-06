# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    attr_reader :password

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :stories,
        foreign_key: :author_id,
        class_name: :Story,
        dependent: :destroy

    has_many :comments,
        foreign_key: :author_id,
        class_name: :Comment
        # inverse_of: :author

    has_many :a_follows_b,
        foreign_key: :follower_id,
        class_name: :Follow,
        dependent: :destroy

    has_many :b_followed_by_a,
        foreign_key: :followed_id,
        class_name: :Follow,
        dependent: :destroy

    #a follows many people
    has_many :following,
        through: :a_follows_b,
        source: :followed

    #b has many followers
    has_many :followers,
        through: :b_followerd_by_a,
        source: :follower


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token
        end
    end

end
