docker build -t s_frontend .

# docker run -p {outsideport}:{insideport} --name={container_name} {image}
docker run -p 3000:3000  --name=s_frontend_c s_frontend

# docker start {container_name} (container has to be created with command above)
# docker start bekind_s_frontend