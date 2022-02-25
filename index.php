<?php
include_once("index.html");
header("Set-Cookie: cross-site-cookie=whatever; SameSite=None; Secure");
?>