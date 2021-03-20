FROM staticfloat/nginx-certbot

COPY ./conf.d/*.conf /etc/nginx/user.conf.d/

CMD ["/bin/bash", "/scripts/entrypoint.sh"]