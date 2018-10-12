# Notes

Just notes on my config setup

Steps:
1. Create AWS EC2 instance for base AWS Linux AMI image
2. Created key pair
3. chmod 400 on key pair
4. ssh into system
5. download splunk `wget -O splunk-7.1.2-a0c72a66db66-Linux-x86_64.tgz 'https://www.splunk.com/bin/splunk/DownloadActivityServlet?architecture=x86_64&platform=linux&version=7.1.2&product=splunk&filename=splunk-7.1.2-a0c72a66db66-Linux-x86_64.tgz&wget=true'`
6. cd to opt directory `cd /opt`
7. extract splunk `sudo tar -xvf ~/Downloads/splunk..........`


splunk pw: splunkit

index=main sourcetype=StravaAPI | dedup id | eval NewTime=strptime(start_date_local,"%Y-%m-%dT%H:%M:%S.%2N") | eval _time=NewTime | timechart count by type