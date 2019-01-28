# Backend services
This service groups multiple backend microservices. Separate as much services as possible (as long as it makes sense and does not affect efficiency/performance). 

The default backend service is the **core**. 

## Backend does not work?
Ensure that you try to access the backend via **https://** instead of **http://** as
the server does not accept any http-requests which might look like the server does not
work properly. 

If you receive on the frontend/client-side a **CERT_INVALID** error just open the backend
website and you will see the famous 'This website is not secure warning'. Just click on proceed. 
After that the frontend should work too! In production we will have a real TLS-certificate so this
won't happen then. 

## Possible further microservices
Potential microservices might be in future: 
- GetStream Service (for parsing/receiving data)
- Data Enrichment Service (enriching getstream-, sql/nosql database(s) data with each another and other apis). 
- Search API service (call to search api etc. when paid ...)
- Further services for other apis...

**Backend Services might be on the same physical device but separated via different docker images!!**