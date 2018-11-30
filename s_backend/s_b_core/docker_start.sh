docker build -t bekind/s_b_core .

# docker run -p {outsideport}:{insideport} --name={container_name} {image}
docker run -p 3080:8080  --name=bekind_s_b_core s_b_core

# docker start {container_name} (container has to be created with command above)
# docker start bekind_s_b_core