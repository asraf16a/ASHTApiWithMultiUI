using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ASHT.Domain.Entities.Inventory
{
    [Table("ProductPrice", Schema = "inventory")]
    [Index(nameof(Id),AllDescending = true)]
    public class ProductPrice
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public long ProductId {  get; set; }

        public decimal BasePrice {  get; set; }

        public decimal PurchasePrice {  get; set; }

        public decimal ProductMarkUp { get; set; }

        public decimal GrossMargin {  get; set; }

        public decimal CellPriceWithTax {  get; set; }

        public decimal CellPriceWithOutTax { get; set; }
    }
}
