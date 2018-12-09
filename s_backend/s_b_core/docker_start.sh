docker build -t s_b_core .

# docker run -p {outsideport}:{insideport} --name={container_name} {image}
docker run -p 3080:8080  --name=s_b_core_c s_b_core && docker stop s_b_core

# docker start {container_name} (container has to be created with command above)
# docker start bekind_s_b_core