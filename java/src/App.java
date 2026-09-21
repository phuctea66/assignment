import javax.swing.JFrame;

public class App {
    public static void main(String [] args) throws Exception {
        int rowCount = 21;
        int columnCount = 19;
        int titleSize = 32;
        int boardHeigh = rowCount * titleSize;
        int boardWidth = columnCount * titleSize;

        JFrame frame = new JFrame("Pac Man");
        frame.setVisible(true);
        frame.setLocationRelativeTo(null);
    }
}
