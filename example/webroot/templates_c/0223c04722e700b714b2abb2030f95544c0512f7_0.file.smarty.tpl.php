<?php /* Smarty version 3.1.27, created on 2015-11-02 07:31:16
         compiled from "/Users/ck/Documents/webpack-php-mock/example/webroot/templates/smarty.tpl" */ ?>
<?php
/*%%SmartyHeaderCode:23708988156371144b5c6e4_04511972%%*/
if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '0223c04722e700b714b2abb2030f95544c0512f7' => 
    array (
      0 => '/Users/ck/Documents/webpack-php-mock/example/webroot/templates/smarty.tpl',
      1 => 1446449474,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '23708988156371144b5c6e4_04511972',
  'variables' => 
  array (
    'data' => 0,
    'key' => 0,
    'item' => 0,
  ),
  'has_nocache_code' => false,
  'version' => '3.1.27',
  'unifunc' => 'content_56371144b8c063_95811781',
),false);
/*/%%SmartyHeaderCode%%*/
if ($_valid && !is_callable('content_56371144b8c063_95811781')) {
function content_56371144b8c063_95811781 ($_smarty_tpl) {

$_smarty_tpl->properties['nocache_hash'] = '23708988156371144b5c6e4_04511972';
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