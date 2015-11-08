<?php /* Smarty version 3.1.27, created on 2015-11-08 15:16:06
         compiled from "/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/smarty.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:1440242507563ef6b65ed810_55126617%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'baf17ba849c8c5fb929433504fc212d8be031abb' => 
    array (
      0 => '/Users/ck/Documents/webpack-php-mock/example/mock/webroot/templates/smarty.tpl',
      1 => 1446449474,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1440242507563ef6b65ed810_55126617',
  'variables' => 
  array (
    'data' => 0,
    'key' => 0,
    'item' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_563ef6b6621502_94792351',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_563ef6b6621502_94792351')) {
function content_563ef6b6621502_94792351 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '1440242507563ef6b65ed810_55126617';
$_from = $_smarty_tpl->tpl_vars['data']->value;
if (!is_array($_from) && !is_object($_from)) {
settype($_from, 'array');
}
$_smarty_tpl->tpl_vars['item'] = new Smarty_Variable;
$_smarty_tpl->tpl_vars['item']->_loop = false;
$_smarty_tpl->tpl_vars['key'] = new Smarty_Variable;
foreach ($_from as $_smarty_tpl->tpl_vars['key']->value => $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->tpl_vars['item']->_loop = true;
$foreach_item_Sav = $_smarty_tpl->tpl_vars['item'];
?>
    <?php echo $_smarty_tpl->tpl_vars['key']->value;?>
 => <?php echo $_smarty_tpl->tpl_vars['item']->value;?>

<?php
$_smarty_tpl->tpl_vars['item'] = $foreach_item_Sav;
}

}
}
?>