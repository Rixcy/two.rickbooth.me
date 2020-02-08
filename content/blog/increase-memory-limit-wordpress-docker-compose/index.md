---
title: Increasing the memory limit for Wordpress with Docker Compose
date: 2020-02-08 19:00:00
tags: ['WordPress', 'Docker Compose', 'Docker']
---

If you've set up a fresh install of WordPress through Docker
(https://hub.docker.com/_/wordpress/), one of the first problems you might run
in to is if you try uploading a plugin or image that exceeds the default memory
limit.

To fix this you can create an uploads.ini file in the same directory as your
docker-compose.yml file with the following contents:

```ini
file_uploads = On
upload_max_filesize = 256M
post_max_size = 256M
```

Then in your docker-compose.yml file you should add the following:

```yml
services:
    wordpress:
        ...
        volumes:
            ...
            - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
```

Your compose file might be structured a little differently but essentially you
just want to map your custom uploads.ini file to the default uploads.ini file
provided by WordPress.

Restart your container then you should be good to go!
