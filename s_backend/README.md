# Backend services
This service groups multiple backend microservices. Separate as much services as possible (as long as it makes sense and does not affect efficiency/performance). 

The default backend service is the **core**. 

## Possible further microservices
Potential microservices might be in future: 
- GetStream Service (for parsing/receiving data)
- Data Enrichment Service (enriching getstream-, sql/nosql database(s) data with each another and other apis). 
- Search API service (call to search api etc. when paid ...)
- Further services for other apis...

**Backend Services might be on the same physical device but separated via different docker images!!**