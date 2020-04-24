<?php

$logger = new FileLogger(0);
$logger->setFilename(_PS_ROOT_DIR_.'/log/debug.log');
$e = new Exception;
$logger->logDebug('Hook '.$hook_name.' called from:');
$logger->logDebug($e->getTraceAsString());
