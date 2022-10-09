server {
    proxy_buffering off;
    #Landing url
    server_name %VIRTUAL_HOST%;
    listen 80;

    location / {
        root %ROOT_DIR%;
        index index.html;
      
    }
    
    location ~ /\.ht {
        deny all;
    }
    
    location = /favicon.ico {
        log_not_found off;
        access_log off;
    }
    
    location = /robots.txt {
        allow all;
        log_not_found off;
        access_log off;
    }
}

