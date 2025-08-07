// In React Native, imported local images are represented as numeric ID.
declare module "*.png" {
  const value: number;
  export default value;
}
