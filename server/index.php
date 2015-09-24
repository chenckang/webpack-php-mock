<?php

define('CURRENT_DIR', dirname(__FILE__));
define('SMARTY_DIR', CURRENT_DIR . '/libs/');
require_once(SMARTY_DIR . 'Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir(CURRENT_DIR . '/templates/');
$smarty->setCompileDir(CURRENT_DIR . '/templates_c/');
$smarty->setConfigDir(CURRENT_DIR . '/configs/');
$smarty->setCacheDir(CURRENT_DIR . '/cache/');

$smarty->display('wlwine/page/wlwine.tpl');