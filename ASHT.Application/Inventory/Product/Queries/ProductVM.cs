namespace ASHT.Application.Inventory.Product.Queries
{
    public class ProductVM
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public int SubCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public string Feature { get; set; }

        public decimal PurchasePrice { get; set; }

        public byte[] ImageContent { get; set; }
    }
}
