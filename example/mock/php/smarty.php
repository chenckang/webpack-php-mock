<?php
date_default_timezone_set("PRC");

define('CURRENT_DIR', dirname(__FILE__));
define('SMARTY_DIR', CURRENT_DIR . '/libs/');
require_once(SMARTY_DIR . 'Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir(CURRENT_DIR . '/../webroot/templates/');
$smarty->setCompileDir(CURRENT_DIR . '/../webroot/templates_c/');
$smarty->setConfigDir(CURRENT_DIR . '/../webroot/configs/');
$smarty->setCacheDir(CURRENT_DIR . '/../webroot/cache/');

$path = preg_replace('/\/smarty\.php\//', '', $_SERVER['REQUEST_URI']);
$json = preg_replace('/\.tpl/', '.json', $path);

$tplData = json_decode(file_get_contents(CURRENT_DIR . '/../jsons/smarty.json'), true);

$smarty->assign('data', $tplData);
$smarty->display($path);
