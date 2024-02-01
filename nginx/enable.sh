ln -sf $(dirname -- "$(realpath -- $0;)";)/campus /etc/nginx/sites-enabled/campus
sudo systemctl restart nginx.service
