#!/bin/bash

npm run build

aws s3 sync build/ s3://sudokrew-blog-test --delete --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers
