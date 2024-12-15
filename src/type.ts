
export interface RsbuildPluginScanOptions {
  /**
   * 项目名
   */
  name?: string
  /**
   * 是否启用插件 默认为 true
   */
  enabled?: boolean
  /**
   * 环境名称
   */
  env: string
  /**
   * sourceDir 打包的源文件目录
   */
  sourceDir?: string
  /**
   * sourceDir 打包的输出目录
   */
  outputDir?: string
}