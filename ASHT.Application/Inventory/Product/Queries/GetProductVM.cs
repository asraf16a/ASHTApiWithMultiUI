namespace ASHT.Application.Inventory.Product.Queries
{
    public class GetProductVM
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public int SubCategoryId { get; set; }

        public string SubCategoryName { get; set; }

        public string Description { get; set; }

        public string Feature { get; set; }

        public decimal PurchasePrice { get; set; }

        public byte[] ImageContent { get; set; }
    }
}
