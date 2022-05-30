module.exports = {
  // 是否显示覆盖率报告
  collectCoverage: true,
  // 告诉 jest 哪些文件需要经过单元测试测试
  collectCoverageFrom: ['jest/*'],

  // 指定生成覆盖率报告文件存放位置
  coverageDirectory: "jest/coverage",

  // ts编译器 注：加了这个，js无法使用import导入，目前无法解决。
  preset: 'ts-jest',

  // 使用jsdom模拟浏览器api
  testEnvironment: 'jsdom',

  // 会在每个测试文件执行前先执行一次
  setupFilesAfterEnv: ['./jest/setup/jest-setup.ts'],

}