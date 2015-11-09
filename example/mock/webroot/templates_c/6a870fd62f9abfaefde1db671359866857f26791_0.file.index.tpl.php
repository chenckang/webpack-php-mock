<?php /* Smarty version 3.1.27, created on 2015-11-09 15:22:49
         compiled from "/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:453357438564049c99b7062_14528242%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6a870fd62f9abfaefde1db671359866857f26791' => 
    array (
      0 => '/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/index.tpl',
      1 => 1447053765,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '453357438564049c99b7062_14528242',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_564049c99ce137_79695630',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_564049c99ce137_79695630')) {
function content_564049c99ce137_79695630 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '453357438564049c99b7062_14528242';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Smarty</title>
</head>
<body>
    This is the smarty demo. The HTML doc is based on the origin page from the the webpack's compiling.
    <div id="content"></div>
<?php echo '<script'; ?>
 src="/app/common.js"><?php echo '</script'; ?>
><?php echo '<script'; ?>
 src="/app/module.js"><?php echo '</script'; ?>
></body>
</html><?php }
}
?>