"""
Django settings for travelmor_api project.

Generated by 'django-admin startproject' using Django 3.1.1.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""

from pathlib import Path
import os
import django_heroku


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get("SECRET_KEY")

# DISABLE_COLLECTSTATIC = 1

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False
# DEBUG = True

# ALLOWED_HOSTS = ["*"]
ALLOWED_HOSTS = ["travelmor-api.herokuapp.com", "travelmor-client.herokuapp.com"]


# Application definition

INSTALLED_APPS = [
    "trips.apps.TripsConfig",
    "users.apps.UsersConfig",
    "default_trips.apps.DefaultTripsConfig",
    "expenses.apps.ExpensesConfig",
    "currencies.apps.CurrenciesConfig",
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "rest_framework",
    "rest_framework.authtoken",
    "rest_auth",
    "django.contrib.sites",
    "allauth",
    "allauth.account",
    "allauth.socialaccount",
    "rest_auth.registration",
    # 'corsheaders',
]

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "corsheaders.middleware.CorsMiddleware",
    "django.middleware.common.CommonMiddleware",
]

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:3000"
# ]
CORS_ALLOW_ALL_ORIGINS = True


ROOT_URLCONF = "travelmor_api.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [os.path.join(BASE_DIR, "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "travelmor_api.wsgi.application"


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": os.environ.get("PG_NAME"),
        "USER": os.environ.get("PG_USER"),
        "HOST": os.environ.get("PG_HOST"),
        "PASSWORD": os.environ.get("PG_PASSWORD"),
        "PORT": os.environ.get("PG_PORT"),
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = True
USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATIC_URL = "/static/"
STATICFILES_DIRS = [os.path.join(BASE_DIR, "travelmor_api/static")]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"


REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.BasicAuthentication",
        "rest_framework.authentication.SessionAuthentication",
        # Returns a Key back when logging in
        "rest_framework.authentication.TokenAuthentication",
    ],
    # 'DEFAULT_PERMISSION_CLASSES': [
    #     'rest_framework.permissions.IsAuthenticated',
    #     # 'travelmor_api.permissions.IsOwner',
    # ]
}

# Serializers to use

# REST_AUTH_SERIALIZERS = {
#     'LOGIN_SERIALIZER': 'users.serializers.CustomUserLoginSerializer',
# }

REST_AUTH_REGISTER_SERIALIZERS = {
    "REGISTER_SERIALIZER": "users.serializers.CustomRegisterSerializer",
}

REST_AUTH_SERIALIZERS = {
    "TOKEN_SERIALIZER": "users.serializers.CustomTokenSerializer",
}

# User the new user class for auth / creation
AUTH_USER_MODEL = "users.User"


# django-allauth  configurations for email verification
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_UNIQUE_EMAIL = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
# Adapter
ACCOUNT_ADAPTER = "users.adapter.CustomAccountAdapter"


# sets usage of email instead of username
ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_VERIFICATION = "none"
ACCOUNT_CONFIRM_EMAIL_ON_GET = False
ACCOUNT_EMAIL_CONFIRMATION_ANONYMOUS_REDIRECT_URL = "/?verification=1"
ACCOUNT_EMAIL_CONFIRMATION_AUTHENTICATED_REDIRECT_URL = "/?verification=1"

SITE_ID = 1
EMAIL_BACKEND = "django.core.mail.backends.console.EmailBackend"


# Activate Django-Heroku.
django_heroku.settings(locals())
