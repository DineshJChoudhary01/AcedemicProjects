package org.fi.productstatus.working;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


@WebServlet("/ProductStatus")
public class ProductStatus extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		HttpSession session=request.getSession(false);
		if(session==null) {
			response.sendRedirect("agentLogin.html");
			return;
		}
		
		String temp=request.getParameter("srno");
		int srno=Integer.parseInt(temp);
		String productStatus=request.getParameter("productStatus");
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection connection = DriverManager.getConnection("jdbc:mysql://root@localhost/actspatna",
					"root@localhost", "password");
					PreparedStatement psAddDetails = connection
							.prepareStatement("insert into productstatus (srno,productStatus) values (?,?)");) {
				
				psAddDetails.setInt(1, srno);
				psAddDetails.setString(2, productStatus);				
				psAddDetails.executeUpdate();
				
				response.sendRedirect("productStatus.jsp");
			} catch (SQLException sql) {
				sql.printStackTrace();
			}

		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} 
	}
}
