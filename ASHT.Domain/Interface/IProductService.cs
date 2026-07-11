using ASHT.Domain.Entities.Inventory;
using System;
using System.Collections.Generic;
using System.Text;

namespace ASHT.Domain.Interface
{
    public interface IProductService
    {
        Task<Product> AddAsync(Product product);
    }
}
