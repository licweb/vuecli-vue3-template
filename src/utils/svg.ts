// 自动化全局引用svg文件
const requireContext = require.context(
  // 目录的相对路径
  "../assets/icons",
  // 是否查询其子目录
  false,
  // 匹配文件的正则表达式
  /\.svg$/
);
requireContext.keys().forEach(requireContext);
