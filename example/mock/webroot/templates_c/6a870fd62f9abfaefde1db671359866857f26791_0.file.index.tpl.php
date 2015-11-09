<?php /* Smarty version 3.1.27, created on 2015-11-09 15:17:38
         compiled from "/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/index.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:75031908856404892114ce2_12193021%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '6a870fd62f9abfaefde1db671359866857f26791' => 
    array (
      0 => '/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/index.tpl',
      1 => 1447053454,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '75031908856404892114ce2_12193021',
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_5640489212a9d6_61411520',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_5640489212a9d6_61411520')) {
function content_5640489212a9d6_61411520 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '75031908856404892114ce2_12193021';
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