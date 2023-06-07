/**
 *
 * Proyecto BuroFy para No Country
 *
 * @version 1.0.0 2023-06-06
 * @author Martha Liliana Gallego Murillo<lilianagallegom@gmail.com>
 * @author Dmitry Borovskikh <dmibrv@gmail.com>
 * @author Milton Figueredo <gratno@gmail.com>

 * @since 1.0.0
 */


package com.burofy.appWebBurofy.utility;

import java.util.List;

public class Pagination {
    private Pagination() {
        throw new IllegalStateException("Utility class");
    }

    public static <T> List<T> paginate(List<T> list, int pageSize, int pageNumber) {
        int startIndex = (pageNumber - 1) * pageSize;
        int endIndex = Math.min(startIndex + pageSize, list.size());
        return list.subList(startIndex, endIndex);
    }
}
