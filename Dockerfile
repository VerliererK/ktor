FROM alpine:3.20.3

# 安裝必要的套件
RUN apk add --no-cache nginx aria2 supervisor \
    && wget -O - https://github.com/filebrowser/filebrowser/releases/download/v2.31.2/linux-amd64-filebrowser.tar.gz \
    | tar -zxf - -C /usr/bin

# 複製配置文件到相應目錄
COPY aria2/aria2.conf /usr/local/bin/aria2.conf
COPY aria2/dht.dat /root/.cache/aria2/dht.dat
COPY ariang/index.html /usr/share/nginx/html/index.html
COPY config/nginx.conf /etc/nginx/nginx.conf
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# 開放必要的端口
EXPOSE 80

# 設定容器啟動時的命令
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
