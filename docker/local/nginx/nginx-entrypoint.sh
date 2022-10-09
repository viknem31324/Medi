#!/usr/bin/env sh
set -e

rm -f /etc/nginx/conf.d/default.conf;
cp /etc/nginx/conf.d/site.conf.tpl /etc/nginx/conf.d/site.conf;

ROOT_DIR="${ROOT_DIR:-/app/dist}";
VIRTUAL_HOST="${VIRTUAL_HOST:-_}";

sed -i "s#%ROOT_DIR%#${ROOT_DIR}#g" /etc/nginx/conf.d/site.conf;
sed -i "s#%VIRTUAL_HOST%#${VIRTUAL_HOST}#g" /etc/nginx/conf.d/site.conf;

exec "$@";
