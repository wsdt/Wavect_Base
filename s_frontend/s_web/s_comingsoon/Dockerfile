#FROM nginx
#COPY ./ /usr/share/nginx/html
FROM nginx:stable-alpine

## Copy our default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY ./static_html /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
